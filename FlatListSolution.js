To fix this, you can use the `estimatedItemSize` and `getItemLayout` props in the FlatList.  `estimatedItemSize` provides an initial guess for the height of each item, while `getItemLayout` allows you to precisely calculate the position of each item. This prevents the FlatList from repeatedly measuring item heights. Here's how to implement it:

```javascript
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  estimatedItemSize={50} // Estimate the height of each item
  getItemLayout={(data, index) => ({
    length: 50, // Fixed height
    offset: 50 * index, // Offset calculation
    index,
  })}
/>
```
By setting `estimatedItemSize` to 50 and providing a `getItemLayout` function that uses a fixed height, we can significantly improve the rendering performance of the FlatList.