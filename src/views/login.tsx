import React from "react";

class Login extends React.Component<any, any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
            <section>
                <div>
                    <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-24'}/>

                    <div>
                        <label htmlFor="email">Email<span className="text-red-600">*</span></label>
                        <input type="email" id="email" placeholder="Enter Your Email" className={'block border border-green-300 outline-none focus:border-green-600'}/>
                    </div>

                    <div>
                        <label htmlFor="password">Email<span className="text-red-600">Password</span></label>
                        <input type="password" id="password" placeholder="Enter Your Password" className={'block border border-green-300 outline-none focus:border-green-600'}/>
                    </div>

                </div>
            </section>
        )
    }
}

export default Login