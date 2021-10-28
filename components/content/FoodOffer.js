import React from 'react'

const FoodOffer = () => {
    return (
        <div className="flex flex-col lg:w-1/3 w-full flex-shrink-0 lg:pr-8 pr-0  lg:pb-8 pb-0 ">
            <img className="w-full  h-auto rounded-2xl" src="/media/salade.png" alt="" />
            <div className="mt-4 flex items-center justify-between">
                <h1 className=" text-base text-gray-900 font-bold">Spicy Na Thai Town</h1>
                <span className="text-xs text-purple-900 bg-purple-200 rounded font-semibold py-1 px-2">Free delivery</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.57474L8 0L5.752 5.57474L0 6.09684L4.36 10.08L3.056 16L8 12.8589Z" fill="#FACD5D" />
                    </svg>
                    <p> <span>4,8</span>(1,873)</p>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 5.6H7.66667V0H9.33333V5.6C9.33333 7.296 7.95 8.672 6.20833 8.776V16H4.125V8.776C2.38333 8.672 1 7.296 1 5.6V0H2.66667V5.6H4.33333V0H6V5.6ZM11.8333 9.6V3.2C11.8333 1.792 13.7 0 16 0V16H13.9167V9.6H11.8333Z" fill="#A3A3A4" />
                    </svg>
                    <span>Burger</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.128 3H5.6V4.61538H8.472L10.072 6.23077H3.6C1.6 6.23077 0 7.84615 0 9.86538C0 11.8846 1.6 13.5 3.6 13.5C5.376 13.5 6.848 12.1915 7.136 10.4873L8.832 9.46154C8.8 9.59885 8.8 9.72808 8.8 9.86538C8.8 11.8846 10.4 13.5 12.4 13.5C14.4 13.5 16 11.8846 16 9.86538C16 7.84615 14.4 6.23077 12.4 6.23077H12.336L9.128 3ZM5.472 10.4792C5.2 11.295 4.464 11.8846 3.576 11.8846C2.472 11.8846 1.576 10.98 1.576 9.86538C1.576 8.75077 2.472 7.84615 3.576 7.84615C4.472 7.84615 5.2 8.44385 5.472 9.25962H3.2V10.4712L5.472 10.4792ZM10.376 9.86538C10.376 10.98 11.272 11.8846 12.376 11.8846C13.4806 11.8846 14.376 10.9806 14.376 9.86538C14.376 8.75019 13.4806 7.84615 12.376 7.84615C11.272 7.84615 10.376 8.75077 10.376 9.86538Z" fill="#A3A3A4" />
                    </svg>
                    <span>45 - 55 min</span>
                </div>

            </div>
        </div>
    )
}

export default FoodOffer
