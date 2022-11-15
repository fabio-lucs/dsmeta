import icon from '../../assets/imgs/notification_icon.svg'
import './style.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notification" />
        </div>
    )


}

export default NotificationButton