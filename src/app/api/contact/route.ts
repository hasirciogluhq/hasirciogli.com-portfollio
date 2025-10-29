import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  projectType: z.enum(['consulting', 'fulltime', 'project', 'infrastructure', 'other'])
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const validationResult = contactSchema.safeParse(body)
    
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

    const { name, email, company, message, projectType } = validationResult.data

    // Get client IP and user agent
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Save to database
    const submission = await prisma.contact_form_submissions.create({
      data: {
        name,
        email,
        company: company || null,
        message,
        project_type: projectType,
        ip_address: ipAddress,
        user_agent: userAgent,
      }
    })

    console.log('Contact form submission saved:', submission.id)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been received successfully! I will get back to you soon.',
        submissionId: submission.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred. Please try again later or send an email directly.' 
      },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve submissions (admin only - you should add authentication)
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check here
    // For now, we'll return a 401 to prevent unauthorized access
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    )

    // Uncomment when authentication is implemented:
    // const submissions = await prisma.contact_form_submissions.findMany({
    //   orderBy: { created_at: 'desc' },
    //   take: 50
    // })
    // 
    // return NextResponse.json({ success: true, data: submissions })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

