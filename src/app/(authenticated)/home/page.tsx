'use client'
import Card from "@/app/components/Card"

export default function Home() {
  return (
      <div className="flex gap-2 md:gap-2 flex-col md:flex-row">
        <Card
          userImageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
          userName="John Doe"
          postDate="06/05/2023 às 15:00"
          postContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus."
        />

        <Card
          userImageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
          userName="John Doe"
          postDate="06/05/2023 às 15:00"
          postContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus."
        />

        <Card
          userImageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
          userName="John Doe"
          postDate="06/05/2023 às 15:00"
          postContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus. Quisquam voluptatum, voluptate, quibusdam, quia quod voluptas quos dolorum quae voluptatibus quas natus."
        />
      </div>
  )
}
