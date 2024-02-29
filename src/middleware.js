
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const requestForNextAuth = {
        headers: {
            cookie: request.headers.get('cookie'),
        },
    };

    const session = await getSession({ req: requestForNextAuth });
    // console.log(session)
     if (request.nextUrl.pathname === '/' && session?.user) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard/addEmployee') && !session?.user?.role==='admin') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/',]
}