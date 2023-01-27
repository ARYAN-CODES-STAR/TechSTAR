import React from 'react'

const Contact = () => {
  return <div className="Contact">
    <main>

        <h1>Contact Us</h1>

        <form>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='abc'/>
            </div>

            <div>
                <label>Name</label>
                <input type="email" required placeholder='xyz'/>
            </div>
            <div>
                <label>Message</label>
                <input type="text" required placeholder='tell'/>
            </div>
            <button type="submit">Send</button>
        </form>
    </main>
  </div>
};

export default Contact