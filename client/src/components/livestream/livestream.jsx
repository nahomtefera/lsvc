import React, { Component } from 'react';
// css
import './livestream.css';
// socket
import {socket} from '../socketComp/socketComp'
// components
import Users from './users';
import Chat from './chat';
import Videostream from './videostream';

var answersFrom = {}, offer;

var peerConnection = window.RTCPeerConnection ||
  window.mozRTCPeerConnection ||
  window.webkitRTCPeerConnection ||
  window.msRTCPeerConnection;

var sessionDescription = window.RTCSessionDescription ||
    window.mozRTCSessionDescription ||
    window.webkitRTCSessionDescription ||
    window.msRTCSessionDescription;

navigator.getUserMedia  = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

var pc = new peerConnection({
  iceServers: [{
      url: "stun:stun.services.mozilla.com",
      username: "somename",
      credential: "somecredentials"
  }]
});

class Livestream extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] }
  }

  componentDidMount() {
    let self = this;

    pc.onaddstream = function (obj) {
      console.log('pscstream:', obj)
      var vid = document.createElement('video');
      vid.setAttribute('class', 'video-stream');
      vid.setAttribute('autoplay', 'autoplay');
      vid.setAttribute('id', 'video-small');
      document.getElementById('video-container').appendChild(vid);
      vid.srcObject = obj.stream;
    }

    navigator.getUserMedia({video: true, audio: true}, function (stream) {
      var video = document.querySelector('video');
      video.srcObject = stream;
      pc.addStream(stream);
    }, self.error);

    // SOCKET VIDEO REQUEST
    socket.on('answer-made', function (data) {
      pc.setRemoteDescription(new sessionDescription(data.answer), function () {
          document.getElementById(data.socket).classList.add('active');
          if (!answersFrom[data.socket]) {
              self.createOffer(data.socket);
              answersFrom[data.socket] = true;
          }
      }, self.error);
    });

    socket.on('offer-made', function (data) {
      offer = data.offer;
      console.log(offer)

      pc.setRemoteDescription(new sessionDescription(data.offer), function () {
          pc.createAnswer(function (answer) {
              pc.setLocalDescription(new sessionDescription(answer), function () {
                  console.log('MAKE ANSWER');
                  socket.emit('make-answer', {
                      answer: answer,
                      to: data.socket
                  });
              }, self.error);
          }, self.error);
      }, self.error);
    });
  }

  error = (err) => {
    console.warn('Error', err);
  }

  createOffer = (id) =>{
    let self = this;
    pc.createOffer(function (offer) {
      console.log('making offer: ', offer)
        pc.setLocalDescription(new sessionDescription(offer), function () {
            socket.emit('make-offer', {
                offer: offer,
                to: id
            });
        }, self.error);
    }, self.error);
    console.log(id)
  }

  render() { 
    return ( 
      <div className='livestream-container'>
        <Users createOffer={this.createOffer}/>
        <Chat />
        <Videostream /> 
      </div>
    );
  }
}
 
export default Livestream;