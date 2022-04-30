import { useContext } from "react"
import { AuthenticationContext } from "../../contexts"
import ArrowDownIcon from "../icons/ArrowDownIcon"
import ArrowTopIcon from "../icons/ArrowTopIcon"
import Avatar from "../util/Avatar"


export const SideBarUser = () => {
    const user = useContext(AuthenticationContext)

    if (user === null) return <></>

    return (
        <div className=" mt-12 mb-4 w-full px-4 flex items-center box-border relative cursor-pointer">
            <Avatar variant="sm" img="/img/user.svg" className="bg-warning" />
            <div className=" sm:flex md:hidden lg:flex flex flex-col ml-5">
                <h1 className="text-sm text-dark font-bold">{user.email.split('@')[0]}</h1>
                <p className=" hidden md:block text-gray-normal text-xs">{user.email}</p>
            </div>
            <div className="flex-grow"></div>
            <div className="sm:flex md:hidden lg:flex flex flex-col">
                <ArrowTopIcon className="w-4 h-4" />
                <ArrowDownIcon className="w-4 h-4 " />
            </div>
        </div>
    )
}