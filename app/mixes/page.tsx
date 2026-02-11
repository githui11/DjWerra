import { redirect } from 'next/navigation'

// This page has been moved to /videos
export default function MixesPage() {
  redirect('/videos')
}
