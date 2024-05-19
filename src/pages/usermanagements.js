import UserManagement from '@/components/UserManagement'
import { AdminLayout } from '@/layout/AdminLayout'
import React from 'react'

export default function Usermanagements() {
  return (
    <AdminLayout>
        <UserManagement/>
    </AdminLayout>
  )
}
