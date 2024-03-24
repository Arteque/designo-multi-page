import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

function Info() {
  return (
    <span className="infos">
        <i>Can't be empty</i>
        <FontAwesomeIcon icon={faCircleExclamation} />
    </span>
  )
}

export default Info