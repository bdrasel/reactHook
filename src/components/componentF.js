import React from 'react'
import {UserContext, ChannelContext} from '../App'

function componentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                 return <div>User Context value {user} and Channel Context Value {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default componentF
