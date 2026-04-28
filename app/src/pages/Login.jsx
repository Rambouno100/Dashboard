import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export default function LoginPage() {
    const [form, setForm] = useState({ username: '', password: '' })
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(form)
        navigate('/')
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-80 p-6 flex flex-col gap-4">
                <CardTitle>Login</CardTitle>
                <Input placeholder="Usuario" onChange={(e) => setForm({ ...form, username: e.target.value })} />
                <Input type="password" placeholder="Contraseña" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <Button onClick={handleSubmit}>Entrar</Button>
            </Card>
        </div>
    )
}