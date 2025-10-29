import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  source: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const validationResult = newsletterSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validationResult.error.issues 
        },
        { status: 400 }
      )
    }

    const { email, source } = validationResult.data

    // Get client IP, user agent, and referrer
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const referrerUrl = request.headers.get('referer') || null

    // Check if email already exists
    const existingSubscription = await prisma.newsletter_subscriptions.findUnique({
      where: { email }
    })

    if (existingSubscription) {
      // If previously unsubscribed, reactivate
      if (existingSubscription.status === 'unsubscribed') {
        await prisma.newsletter_subscriptions.update({
          where: { email },
          data: {
            status: 'active',
            unsubscribed_at: null,
            subscribed_at: new Date(),
            source: source || existingSubscription.source,
          }
        })

        return NextResponse.json(
          { 
            success: true, 
            message: 'Welcome back! Your subscription has been reactivated.',
          },
          { status: 200 }
        )
      }

      // Already subscribed
      return NextResponse.json(
        { 
          success: true, 
          message: 'You are already subscribed to our newsletter.',
        },
        { status: 200 }
      )
    }

    // Create new subscription
    const subscription = await prisma.newsletter_subscriptions.create({
      data: {
        email,
        source: source || 'unknown',
        referrer_url: referrerUrl,
        ip_address: ipAddress,
        user_agent: userAgent,
      }
    })

    console.log('Newsletter subscription created:', subscription.id)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed! Check your email for confirmation.',
        subscriptionId: subscription.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    const subscription = await prisma.newsletter_subscriptions.findUnique({
      where: { email }
    })

    if (!subscription) {
      return NextResponse.json(
        { success: false, error: 'Subscription not found' },
        { status: 404 }
      )
    }

    await prisma.newsletter_subscriptions.update({
      where: { email },
      data: {
        status: 'unsubscribed',
        unsubscribed_at: new Date()
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully unsubscribed from newsletter.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while unsubscribing.' 
      },
      { status: 500 }
    )
  }
}

