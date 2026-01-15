"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Extract country code from pathname, e.g., /us/store -> us
      const pathParts = pathname.split("/")
      const countryCode = pathParts[1] || "us" // default to 'us' if not found
      router.push(`/${countryCode}/store?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="px-4 py-2 border border-ui-border-base rounded-l-md focus:outline-none focus:border-none focus:ring-2 focus:ring-ui-border-interactive"
      />
      <button
        type="submit"
        className="px-4 py-2 bg border border-l-0 border-ui-border-base rounded-r-md hover:bg-ui-bg-interactive-hover text-white"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
