import styled from './Search.module.css'

export const Search = ({ placeholder, title }) => {
  return (
    <div className={styled.container}>
        <h3>{title}</h3>
        <input type="text" name="" id="" placeholder='Nombre o nemotécnico' />
    </div>
  )
}
