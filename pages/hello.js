import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <p>Page hello</p>
    <ul>
      <li><Link href='/' as='/'><a>index</a></Link></li>
      <li><Link href='/button' as='/button'><a>button</a></Link></li>
    </ul>
  </div>
)
