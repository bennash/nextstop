import React from 'react'
import { RichText } from 'prismic-reactjs'

const TestimonialSection = ({ slice }) => (
  <section className="grid grid-cols-1 md:grid-cols-2">
    <img className={slice.variation === 'imageOnRight' ? 'order-2' : ''} src={slice.primary.image.url} alt={slice.primary.image.alt} />
	<blockquote>
		<p>{ slice.primary.quote }</p>
		<cite>{ slice.primary.attributionName }</cite>
	</blockquote>
  </section>
)

export default TestimonialSection