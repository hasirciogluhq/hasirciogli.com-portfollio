import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mustafa Hasırcıoğlu | Yazılım Geliştirici, Tasarımcı ve Müzisyen',
    description: 'Mustafa Hasırcıoğlu hakkında bilgi edinin. Yazılım geliştirme, tasarım ve müzik alanlarında faaliyet gösteren yenilikçi bir profesyonel.',
    keywords: 'Mustafa Hasırcıoğlu, yazılım geliştirici, tasarımcı, müzisyen, GitHub, hasirciogli.com, Bla Bla Bla',
    authors: [{ name: 'Mustafa Hasırcıoğlu' }],
    openGraph: {
        title: 'Mustafa Hasırcıoğlu | Yazılım Geliştirici, Tasarımcı ve Müzisyen',
        description: 'Yazılım geliştirme, tasarım ve müzik alanlarında faaliyet gösteren yenilikçi bir profesyonel.',
        url: 'https://hasirciogli.com',
        siteName: 'Mustafa Hasırcıoğlu',
        images: [
            {
                url: '/mustafa-hasircioglu.webp',
                width: 1080,
                height: 1080,
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mustafa Hasırcıoğlu | Yazılım Geliştirici, Tasarımcı ve Müzisyen',
        description: 'Yazılım geliştirme, tasarım ve müzik alanlarında faaliyet gösteren yenilikçi bir profesyonel.',
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
