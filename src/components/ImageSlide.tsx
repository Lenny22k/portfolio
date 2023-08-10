interface ImageSlideProps {
  language: string
}

export function ImageSlide({ language }: ImageSlideProps) {
  return <img src={language} alt="html icon" className="w-16" />
}
