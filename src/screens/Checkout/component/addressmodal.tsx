import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from 'react-native-select-dropdown';
interface IModalProps {
  isVisible: boolean;
  toggleModal: () => void;
}

export const AddressModal = (props: IModalProps) => {

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [showAddressInfo, setShowAddressInfo] = useState(false);

  const handleCitySelect = (selectedCity) => {
    setSelectedCity(selectedCity);
    setSelectedDistrict('');
    setSelectedWard('');
    setShowAddressInfo(false);
  };

  const handleDistrictSelect = (selectedDistrict) => {
    setSelectedDistrict(selectedDistrict);
    setSelectedWard('');
    setShowAddressInfo(false);
  };

  const handleWardSelect = (selectedWard) => {
    setSelectedWard(selectedWard);
    setShowAddressInfo(true);
  };
  const [phoneNumber, setPhoneNumber] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [isInfoEntered, setIsInfoEntered] = useState(false);

  const handleSaveAddress = () => {
    props.toggleModal()
  };

  const handleInputChange = (text: string) => {
    setDetailAddress(text);
    setIsInfoEntered(text.length > 0 || phoneNumber.length > 0);
  };

  const handlePhoneInputChange = (text: string) => {
    setPhoneNumber(text);
    setIsInfoEntered(text.length > 0 || detailAddress.length > 0);
  };

  const addressOptions = [
    {
      city: 'Thành phố Hồ Chí Minh',
      districts: [
        {
          name: 'Quận 1',
          wards: ['Phường 1', 'Phường 2', 'Phường 3'],
        },
        {
          name: 'Quận 2',
          wards: ['Phường 4', 'Phường 5', 'Phường 6'],
        },
      ],
    },
    {
      city: 'Hà Nội',
      districts: [
        {
          name: 'Quận Ba Đình',
          wards: ['Phường Trúc Bạch', 'Phường Vĩnh Phúc', 'Phường Cống Vị'],
        },
        {
          name: 'Quận Hoàn Kiếm',
          wards: ['Phường Phúc Tân', 'Phường Đồng Xuân', 'Phường Hàng Bạc'],
        },
      ],
    },
  ];

  return (
    <Modal visible={props.isVisible} animationIn="slideInUp" animationOut="slideOutDown">
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Thay đổi địa chỉ</Text>
          <TouchableOpacity onPress={props.toggleModal}>
            <EvilIcons name="close" color='#000' size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Người đặt hàng"
              placeholderTextColor='silver'
              value="Doan"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              placeholderTextColor='silver'
              keyboardType="numeric"
              maxLength={10}
              onChangeText={handlePhoneInputChange}
            />
          </View>
          <View>
            <SelectDropdown
              data={addressOptions.map((option) => option.city)}
              onSelect={handleCitySelect}
              buttonTextAfterSelection={(selectedItem) => selectedItem || 'Chọn thành phố'}
              rowTextForSelection={(item) => item}
              buttonStyle={styles.addressButton}
              buttonTextStyle={styles.addressButtonText}
              dropdownStyle={styles.addressDropdown}
              defaultButtonText="Chọn thành phố"
              renderDropdownIcon={() => (
                <EvilIcons name="chevron-down" color="#000" size={12} />
              )}
            />
            {selectedCity && (
              <SelectDropdown
                data={addressOptions.find((option) => option.city === selectedCity).districts.map((district) => district.name)}
                onSelect={handleDistrictSelect}
                buttonTextAfterSelection={(selectedItem) => selectedItem || 'Chọn huyện'}
                rowTextForSelection={(item) => item}
                buttonStyle={styles.addressButton}
                buttonTextStyle={styles.addressButtonText}
                dropdownStyle={styles.addressDropdown}
                defaultButtonText="Chọn Quận/Huyện"
                renderDropdownIcon={() => (
                  <EvilIcons name="chevron-down" color="#000" size={12} />
                )}
              />
            )}

            {selectedDistrict && (
              <SelectDropdown
                data={addressOptions
                  .find((option) => option.city === selectedCity)
                  .districts.find((district) => district.name === selectedDistrict).wards}
                onSelect={handleWardSelect}
                buttonTextAfterSelection={(selectedItem) => selectedItem || 'Chọn xã'}
                rowTextForSelection={(item) => item}
                buttonStyle={styles.addressButton}
                buttonTextStyle={styles.addressButtonText}
                dropdownStyle={styles.addressDropdown}
                defaultButtonText="Chọn Thị trấn/Xã"
                renderDropdownIcon={() => (
                  <EvilIcons name="chevron-down" color="#000" size={12} />
                )}
              />
            )}
          </View>
          {showAddressInfo && (
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Địa chỉ chi tiết"
                placeholderTextColor="#000"
                onChangeText={handleInputChange}
              />
              <TouchableOpacity
                style={[styles.saveButton, isInfoEntered ? null : styles.saveButtonDisabled]}
                onPress={handleSaveAddress}
                disabled={!isInfoEntered}
              >
                <Text style={styles.saveButtonText}>Lưu</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#000'
  },
  content: {
    backgroundColor: '#fff',
    padding: 20
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: 280,
    height: 40,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 10,
    color: '#000'
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  dropdownIcon: {
    marginLeft: 10,
  },
  addressButton: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    maxHeight: 200,
    width: 280,
  },
  addressButtonText: {

  },
  addressDropdown: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    maxHeight: 200,
    width: 280,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: 'gray',
  },
});