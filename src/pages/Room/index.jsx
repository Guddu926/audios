import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomId } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const initializeMeeting = async () => {
            const appID = 340940391;
            const serverSecret = "d14f0530b8287c6946e5f003cef12953";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Er Guddu Raj");
            const zc = ZegoUIKitPrebuilt.create(kitToken);

            // Join the room with video and audio enabled
            zc.joinRoom({
                container: meetingRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall
                },
                showScreenSharingButton: false,
                enableCamera: true, // Enable camera
                enableMicrophone: true // Enable microphone
            });
        };

        initializeMeeting();

        return () => {
            // Clean up resources if needed
        };
    }, [roomId]);

    return (
        <div ref={meetingRef} />
    );
};

export default Room;
