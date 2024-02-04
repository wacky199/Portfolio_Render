import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import validator from 'validator';

const ContactForm = () => {
    const url = `/contact/messages`;

    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onSubmitPostData = async () => {
        ////// // Lets add sent time also /////////////////

        const time = new Date().toLocaleString();

        ///////// Posting data to given url /////////////
        try {
            const res = await axios.post(url, {
                name: data.name,
                email: data.email,
                message: data.message,
                time: time,
            });
            console.log(res);
        } catch (err) {
            console.error();
            swal({
                title: 'Error',
                text: 'Looks like this message got lost in cyberspace. Try a different way to connect. Let\'s see if we can outsmart the tech!',
                icon: 'warning',
                dangerMode: false,
            });
        }
    };

    const submit = (e) => {
        e.preventDefault();     //// so onSubmit page doesnt refresh

        //////////////////// validate the data before sending to server //////////////////

        const validEmail = validator.isEmail(data.email);
        const emptyName = validator.isEmpty(data.name, {
            ignore_whitespace: true,
        });
        const emptyMessage = validator.isEmpty(data.message, {
            ignore_whitespace: true,
        });

        //////////////////////// alert before sending ///////////////////////////////////

        if (!emptyName && validEmail && !emptyMessage) {
            console.log(`Message details: ${JSON.stringify(data)}`);
            swal({
                title: 'Confirmation',
                text: 'Ready to send this message? Hit OK and let\'s unleash it into the digital wild! ',
                icon: 'info',
                dangerMode: false,
            }).then((willSend) => {
                if (willSend) {
                    swal(
                      "Thankyou!",
                      "Sent! May take time. DM for speedy reply!"
                    );
                    onSubmitPostData();
                }
            });
        } else {
            if (emptyMessage || emptyName) {
                swal({
                    title: 'Error!',
                    text: 'Empty fields? Let\'s fill \'em!',
                    dangerMode: false,
                    icon: 'warning',
                });
            } else if (!validEmail) {
                swal({
                  title: "Invalid Email!",
                  text: "Email ID fail! Let\'s retry with real one.",
                  dangerMode: false,
                });
            } else {
                swal({
                    title: 'Error!',
                    text: 'Empty fields? Let\'s fill \'em!',
                    dangerMode: false,
                });
            }
            return;
        }

        //////////////////////////////////////////////////////////////////////
    };

    // this function will be called at every change to avoid this use debouncing
    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        // console.log(newData);
    };

    

    ////////////////////////////////////// Debouncing ///////////////////////////////
    // // lets create a betterHandle using debouncing concept
    // const debounce = (fn, period) => {
    //     let timer;
    //     console.log(data);
    //     return (...args) => {
    //         if (timer) clearTimeout(timer);
    //         timer = setTimeout(() => fn(...args), period);
    //     };
    // };

    // const handleInput = (e) => {
    //     console.log(e.target.value);
    //     setData({ ...data, [e.target.id]: e.target.value });
    // };

    /////////////////////////////////////////////////////////////////////////

    return (
      <div className="getInTouchContactForm">
        <h2>Contact form</h2>
        <form onSubmit={(e) => submit(e)}>
          <input
            onChange={(e) => handle(e)}
            type="text"
            defaultValue={data.name}
            id="name"
            placeholder="Full Name"
          />
          <br />
          <input
            onChange={(e) => handle(e)}
            type="email"
            id="email"
            defaultValue={data.email}
            placeholder="Email ID"
          />
          <br />
          <textarea
            onChange={(e) => handle(e)}
            id="message"
            defaultValue={data.message}
            rows="5"
            cols="auto"
            placeholder="Your Note"
          />
          <br />
          <input type="submit" className="btn" value="Shoot a Message" />
        </form>
      </div>
    );
};

export default ContactForm;
