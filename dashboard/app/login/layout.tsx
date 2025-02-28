import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type DashboardLayoutProps = {
    children: React.ReactNode
}

export default async function LoginLayout({ children }: DashboardLayoutProps) {
    const token = (await cookies()).get('token')?.value

    if (!!token) {
        return redirect('/dashboard')
    }

    return <div>{children}</div>
}
