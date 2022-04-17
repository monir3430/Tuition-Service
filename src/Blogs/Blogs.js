import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
                <h3>What is the difference between authorization and authentication</h3>

                <p><b>Authentication</b>refers to identifying the person who want to be accessed in . In this situation, the person need to be granted to be familiar in some area.<br></br> <b>On the other hand, Authorization </b>refer to accessing facilities to use. How many function he/she will use, what kind of facilities he/she will use. These are the example of <b>authorization.<br></br> In summary, authentication</b>  is the process of verifying who someone is, whereas <b>authorization</b> is the process of verifying what specific applications, files, and data a user has access to </p>

                <h3>Why are we using firebase? What other options do we have to implement authentication?</h3>
                <p><b>The main reason are to use firebase......</b>
                    <ol className='facilities'>
                        <li>We use as backend server</li>
                        <li> It's free</li>
                        <li>Sync real time data</li>
                        <li>No SQL database so it is more faster</li>
                        

                    </ol>
                    <b>Other options are ......</b>
                    <ol className='facilities'> 
                    <li>Parse</li>
                        <li>Back4App</li>
                       <li> AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>Couchbase</li>
                       <li> NativeScript</li>
                       <li> RxDB</li>
                       <li> Flutter</li>
                    </ol>
                    </p>
                <h3>What are the other services provided by firebase?</h3>
                <h4>Other services are ............</h4>

                    <ol className='facilities'>
                    <li>Push notification</li>
                        <li>  Analytics</li>
                        <li> Crash reports</li>
                        <li>Cloud storage</li>
                        <li>Hosting</li>
                        <li>Test Lab</li>
                        <li>Dynamic Linking</li>
                        <li>Auto Backup and many more…</li>
                    </ol>
            </div>
        </div>
    );
};

export default Blogs;