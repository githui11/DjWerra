import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
        return new NextResponse('Missing ID', { status: 400 });
    }

    // Try qualities in order
    const qualities = ['maxresdefault', 'hqdefault', 'mqdefault', 'sddefault'];

    for (const quality of qualities) {
        const url = `https://img.youtube.com/vi/${id}/${quality}.jpg`;
        try {
            const res = await fetch(url);
            if (res.ok) {
                const blob = await res.blob();
                return new NextResponse(blob, {
                    headers: {
                        'Content-Type': 'image/jpeg',
                        'Cache-Control': 'public, max-age=31536000, immutable',
                    },
                });
            }
        } catch (e) {
            console.error(`Failed to fetch ${url}`, e);
        }
    }

    // If all fail, return 404
    return new NextResponse('Thumbnail not found', { status: 404 });
}
