import './PreviewItemStyles.scss'
import LocationIcon from '../../assets/Location'
import { HTMLAttributes } from 'react'
// import location  from '../../assets/location.svg'
interface PreviewItemProps extends HTMLAttributes<HTMLDivElement>{
  nameSurname: string
  company: string
  country: string
}

function PreviewItem({ nameSurname, company, country }: PreviewItemProps) {
  return (
    <div className="preview-item">
      <LocationIcon />
      <div className="preview-col">
        <div>{nameSurname}</div>
        <div>
          {company} {country}
        </div>
      </div>
    </div>
  )
}

export default PreviewItem
