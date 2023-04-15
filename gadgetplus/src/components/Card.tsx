import cardStyles from '../styles/cardboard.module.css'
interface card {
    type: string
    visitations: string
    description: string
}
function Card({type, number, description}) {
  return (
    <div className={cardStyles.card1}>
        <div
            className= {cardStyles.card2}>
            {type}
        </div>
        <div className="p-6">
            <h5
            className="mb-2 text-xl font-medium leading-tight">
            {number}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {description}
            </p>
            
        </div>
        
    </div>
  )
}

export default Card