import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const foodItems = [
    {
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
      dish: 'Margherita Pizza',
      restaurant: 'Mario\'s Pizzeria'
    },
    {
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop',
      dish: 'Classic Burger',
      restaurant: 'Burger Palace'
    },
    {
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=400&fit=crop',
      dish: 'Chicken Burger',
      restaurant: 'Fly Burger'
    }
  ]

  const handlePress = () => {
    setActiveIndex((prev) => (prev + 1) % 3) 
  }

  const getOrderedItems = () => {
    const total = foodItems.length
    return [
      foodItems[(activeIndex - 1 + total) % total],
      foodItems[activeIndex],
      foodItems[(activeIndex + 1) % total]
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

  const orderedItems = getOrderedItems()

  return (
    <View style={{ paddingVertical: 20, alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center',
          paddingHorizontal: 20 
        }}>
          {orderedItems.map((item, index) => {
            const isCenter = index === 1
            return (
              <View key={index} style={{ position: 'relative', marginHorizontal: 10 }}>
                <Image
                  source={{ uri: item.image }}
                  style={getImageStyle(index)}
                />
                {isCenter && (
                  <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 8,
                  }}>
                    <Text style={{ 
                      fontSize: 12, 
                      fontWeight: 'bold', 
                      color: 'white',
                      textAlign: 'center'
                    }}>
                      {item.dish}
                    </Text>
                    <Text style={{ 
                      fontSize: 10, 
                      color: '#ccc',
                      textAlign: 'center'
                    }}>
                      {item.restaurant}
                    </Text>
                  </View>
                )}
              </View>
            )
          })}
        </View>
      </TouchableOpacity>

      <View style={{ 
        flexDirection: 'row', 
        marginTop: 15,
        justifyContent: 'center' 
      }}>
        {foodItems.map((_, index) => (
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