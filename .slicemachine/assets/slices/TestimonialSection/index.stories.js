import MyComponent from './../../../../slices/TestimonialSection';

export default {
  title: 'slices/TestimonialSection'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"testimonial_section","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"quote":"aggregate leading-edge e-markets","attributionName":"deploy next-generation methodologies"},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _ImageOnRight = () => <MyComponent slice={{"variation":"imageOnRight","name":"Image on Right","slice_type":"testimonial_section","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"quote":"synergize out-of-the-box convergence","attributionName":"matrix strategic content"},"id":"_ImageOnRight"}} />
_ImageOnRight.storyName = 'Image on Right'
