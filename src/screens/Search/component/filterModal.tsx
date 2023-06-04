import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
export const FilterModal = ({ isVisible, toggleModal }) => {
    return (
        <View>
            <Modal
                isVisible={isVisible}
                animationIn="fadeIn"
                animationInTiming={300}
                animationOut="fadeOut"
                animationOutTiming={300}
                onSwipeComplete={toggleModal}
                swipeDirection={['down']}
            >
                <View style={{ backgroundColor: '#333333', height: '100%', width: '100%', }}>
                    <View>
                        <View>
                            <Text>

                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    )
}