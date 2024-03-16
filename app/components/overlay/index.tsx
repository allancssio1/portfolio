type OverlayProps = {
  companyName: string
}

export const Overlay = ({ companyName }: OverlayProps) => {
  return (
    <div className="absolute w-full h-full bg-gray-900/50 flex justify-center items-center">
      <span className="text-3xl text-gray-400">{companyName}</span>
    </div>
  )
}
