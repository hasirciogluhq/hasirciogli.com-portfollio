import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mustafa Hasırcıoğlu | Software Developer, Designer, and Musician',
    description: 'Learn more about Mustafa Hasırcıoğlu, an innovative professional working in software development, design, and music.',
    keywords: 'Mustafa Hasırcıoğlu, software developer, designer, musician, GitHub, hasirciogli.com, Bla Bla Bla',
    authors: [{ name: 'Mustafa Hasırcıoğlu' }],
    openGraph: {
        title: 'Mustafa Hasırcıoğlu | Software Developer, Designer, and Musician',
        description: 'An innovative professional working in software development, design, and music.',
        url: 'https://hasirciogli.com',
        siteName: 'Mustafa Hasırcıoğlu',
        images: [
            {
                url: '/mustafa-hasircioglu.webp',
                width: 1080,
                height: 1080,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mustafa Hasırcıoğlu | Software Developer, Designer, and Musician',
        description: 'An innovative professional working in software development, design, and music.',
        images: ['/mustafa-hasircioglu.webp'],
    },
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
