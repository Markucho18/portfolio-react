interface TechIconsProps {
  icon: React.ReactNode
  name: string
}

const TechIcon: React.FC<TechIconsProps> = ({ icon, name}) => {
  return (
    <div className="group relative hover:-translate-y-1 transition duration-150">
      {icon}
      <div className="opacity-0 group-hover:opacity-100 absolute left-2 -bottom-8 bg-white rounded-md text-lg text-zinc-700/90 px-3 transition duration-100">{name}</div>
    </div>
  )
}

export default TechIcon