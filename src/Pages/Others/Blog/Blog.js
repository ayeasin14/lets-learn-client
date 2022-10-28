import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-32 md:mx-32 my-6'>

            <div className="card card-compact bg-base-100 shadow-2xl p-4">
                <h2 className='text-2xl text-center font-semibold text-rose-300'>Here some common Questions & answers</h2>
                <figure><img className='my-4' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body grid grid-cols-1 gap-5">
                    <div tabIndex={0} className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is cors?
                        </div>
                        <div className="collapse-content">
                            <p> Cross-origin resource sharing (CORS) allows web developers to work around the same-origin policy. CORS adds HTTP headers which instruct web browsers on how to use and manage cross-domain content. The browser then allows or denies access to the content based on its security configuration.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </div>
                        <div className="collapse-content">
                            <p>Firebase offers numerous easy-to-use SDKs, efficient back-end services, and user interface libraries for authenticating the users on the application. Typically, it takes months to establish a functional authentication process, but with Firebase, the whole system can be set up in minutes and less than 15 lines of code.

                                <br />
                                1.  Phone
                                <br />
                                2. Google Play
                                <br />
                                3. Apple
                                <br />
                                4. Game Center
                                etc.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How does the private route work?
                        </div>
                        <div className="collapse-content">
                            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is Node? How does Node work?
                        </div>
                        <div className="collapse-content">
                            <p>Node is a JavaScript Runtime. Using Node we can run JavaScript code on server. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;