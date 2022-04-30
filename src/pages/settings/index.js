import React from 'react'
import SectionHead from '../../components/util/SectionHead'
import SettingLine from '../../components/settings/SettingLine'
/**Icons */
import FavoriteIcon from '../../components/icons/FavoriteIcon'
import MailIcon from '../../components/icons/MailIcon'
import UserIcon from '../../components/icons/UserIcon'
import WalletIcon from '../../components/icons/WalletIcon'
import CreditCardIcon from '../../components/icons/CreditCardIcon'
import QuestionMarkIcon from '../../components/icons/QuestionMarkIcon'
import AddUserIcon from '../../components/icons/AddUserIcon'
import CashIcon from '../../components/icons/CashIcon'
/**Modals */
import PersonalInfoModal from '../../components/settings/modals/PersonalInfoModal'
import AdressesModal from '../../components/settings/modals/AdressesModal'
import MarketingPrefrences from '../../components/settings/modals/MarketingPrefrences'
const index = () => {
    return (
        <div>
            <SectionHead title="Settings" />
            <div className="space-y-12">
                {/**General settings */}
                <div className="text-dark space-y-8">
                    <h6 className="text-gray-normal">General</h6>
                    <div className="space-y-8">
                        <SettingLine title="Personal information" modalComponent={<PersonalInfoModal/>}>
                            <UserIcon className="w-6 h-6 text-primary" />
                        </SettingLine>
                        <SettingLine title="Saved addresses" modalComponent={<AdressesModal/>}>
                            <FavoriteIcon className="w-6 h-6 text-secondary" />
                        </SettingLine>
                        <SettingLine title="Marketting prefrences" modalComponent={<MarketingPrefrences/>}>
                            <MailIcon className="w-6 h-6 text-warning" />
                        </SettingLine>
                    </div>
                </div>
                {/**Payment settings */}
                <div className="text-dark space-y-8">
                    <h6 className="text-gray-normal">Payments</h6>
                    <div className="space-y-8">
                        <SettingLine title="Payment methods">
                            <WalletIcon className="w-5 h-5 text-primary" />
                        </SettingLine>
                        <SettingLine title="My cards">
                            <CreditCardIcon className="w-6 h-6 text-secondary" />
                        </SettingLine>
                    </div>
                </div>
                {/**Other settings */}
                <div className="text-dark space-y-8">
                    <h6 className="text-gray-normal">Other</h6>
                    <div className="space-y-8">
                        <SettingLine title="Support">
                            <QuestionMarkIcon className="w-6 h-6 text-primary" />
                        </SettingLine>
                        <SettingLine title="Invite a friend">
                            <AddUserIcon className="w-6 h-6 text-secondary" />
                        </SettingLine>
                        <SettingLine title="Discounts">
                            <CashIcon className="w-6 h-6 text-warning" />
                        </SettingLine>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default index
