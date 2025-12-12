import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

 const foodImages = [
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=400&fit=crop',
]

  const handlePress = () => {
    setActiveIndex((prev) => (prev + 1) % 3) 
  }

    const getOrderedImages = () => {
    const total = foodImages.length
    return [
      foodImages[(activeIndex - 1 + total) % total],
      foodImages[activeIndex],                        
      foodImages[(activeIndex + 1) % total]      
    ]
  }

  const getImageStyle = (index) => {
    const isCenter = index === 1
    return {
      width: isCenter ? 180 : 100,
      height: isCenter ? 120 : 100,
      borderRadius: isCenter ? 20 : 15,
      marginHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: isCenter ? 6 : 4 },
      shadowOpacity: isCenter ? 0.4 : 0.3,
      shadowRadius: isCenter ? 8 : 6,
      elevation: isCenter ? 10 : 8,
    }
  }

const orderedImages = getOrderedImages()

  return (
    <View style={{ paddingVertical: 20, alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center',
          paddingHorizontal: 20 
        }}>
          {orderedImages.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={getImageStyle(index)}
            />
          ))}
        </View>
      </TouchableOpacity>

      <View style={{ 
        flexDirection: 'row', 
        marginTop: 15,
        justifyContent: 'center' 
      }}>
        {foodImages.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === activeIndex ? '#FF6B6B' : '#ccc',
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  )
}

export default ImageCarousel