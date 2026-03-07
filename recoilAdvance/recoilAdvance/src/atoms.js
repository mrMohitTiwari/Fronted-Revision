import {atom, selector} from "recoil"
export const  myNetworkAtom = atom({
    key:"myNetwork",
    default:12
});
export const myMessageAtom = atom({
    key:"myMessage",
    default:100
})
export const NotificationAtom = atom(
    {
        key:"Notification",
        default:13
    }
)
// creating a selector for summing up all the notifications
export const AllNotificationSelector = selector({
    key:"AllNotificationSelector",
    get:({get})=>{
        const myNetwork = get(myNetworkAtom)
        const message = get(myMessageAtom)
        const notifications = get(NotificationAtom)
        return myNetwork + message + notifications;
    }
})
