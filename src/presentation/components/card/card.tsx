import React from 'react'
import Styled from './card.style'

interface ICardProps {
  image: string
  name: string
  altImage: string
}

export const Card: React.FC<ICardProps> = ({
  altImage,
  image,
  name
}: ICardProps) => {
  return (
    <Styled.WrapperCard>
      <Styled.ContentCard>
        <Styled.Image src={image} alt={altImage} />
        <Styled.Text>
            {name}
        </Styled.Text>
      </Styled.ContentCard>
    </Styled.WrapperCard>
  )
}
