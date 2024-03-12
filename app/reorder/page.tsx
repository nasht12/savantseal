"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Reorder } from "framer-motion"
import { useState } from "react"

const CardList = () => {
    const [items, setItems] = useState(['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'])


  return (
     <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item, index) => (
         <Reorder.Item key={item} value={item}>
        <Card key={index}>
          <CardHeader>
            <CardTitle>Card {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a card.</p>
          </CardContent>
        </Card>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default CardList;
