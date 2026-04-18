import { create } from 'zustand'

const useUserStore = create((set) => ({
    user: {
        name: 'Gustavo Montoya',
        email: 'alfonsomontoyacam@gmail.com',
        role: 'Admin',
        avatar: 'https://api.dicebear.com/9.x/bottts-neutral/svg?eyes=bulging,shade01,eva',
        plan: 'Pro',
    },
    setUser: (userData) => set({ user: userData }),
}))

export default useUserStore