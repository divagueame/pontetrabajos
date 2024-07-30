import Link from 'next/link'
import { delay } from "@/lib/utils"

export default async function Page() {
  console.log("Page!")
  await delay(3000)
  return <div>

    <h1>Nuevos trabajos</h1>
    <Link href="/">Home</Link>
  </div>

}
