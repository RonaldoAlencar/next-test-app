'use client'
import Button from "@/app/components/Button"
import Card from "@/app/components/Card"
import Input from "@/app/components/Input"

export default function Home() {
  return (
      <>
      <div className="mt-2 flex gap-2">
        <div className="flex-1">
          <Input
            onChange={() => {}}
            id="whatAreYouThinking"
            name="whatAreYouThinking"
            type="text"
            placeholder="O que você está pensando?"
          />
        </div>
        <div className="flex-2">
          <Button
            onClick={() => {}}
            textContent="Publicar"
            type="button"
            color="success"
          />
        </div>
      </div>
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
      </>
  )
}
