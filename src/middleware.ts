import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    var token = request.cookies.get("token")
    if(!token){
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/transactions/:path*',
        '/categories/:path*',
    ]
}