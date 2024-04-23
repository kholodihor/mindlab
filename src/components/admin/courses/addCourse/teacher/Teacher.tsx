import Select from 'react-select'
import css from './Teacher.module.css'
import { Controller } from 'react-hook-form'

const Teacher = ({ control, errors }: { control: any; errors: any }) => {
  const options = [
    { value: '1', label: 'Ana Garty' },
    { value: '2', label: 'Ivan Struk' },
    { value: '3', label: 'Maria KoKo' },
    { value: '4', label: 'Ana Ana' },
    { value: '5', label: 'Ivan Ivan' },
    { value: '6', label: 'Maria Maria' },
    { value: '9', label: 'Ana Ana' },
    { value: '7', label: 'Ivan Go' },
    { value: '8', label: 'Maria Qwerty' }
  ]

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Оберіть викладача:</h2>
      <Controller
        name="teacherId"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            placeholder="Марко Федоренко"
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: `#8D83FF`,
                primary25: `#8D83FF`
              }
            })}
            styles={{
              input: (base) => ({
                ...base,
                fontSize: '18px',
                fontWeight: '500',
                height: '43px'
              }),
              control: (base) => ({
                ...base,
                border: 'none',
                borderBottom: `2px solid #09090A`,
                width: '278px',
                backgroundColor: '#F9F9FA'
              }),
              indicatorSeparator: (base) => ({
                ...base,
                display: 'none'
              }),
              menu: (base) => ({
                ...base,
                width: '278px',
                backgroundColor: '#E6EAFF'
              }),
              menuList: (base) => ({
                ...base,
                maxHeight: '175px',
                width: '278px'
              }),
              option: (base) => ({
                ...base,
                borderBottom: `1px solid #818182`,
                fontSize: '18px',
                fontWeight: '500'
              }),
              valueContainer: (base) => ({
                ...base,
                fontSize: '18px',
                fontWeight: '500'
              })
            }}
          />
        )}
      />
     {errors.teacherId?.message && errors.teacherId?.message !== undefined  && <span className={css.error}>{errors.teacherId?.message}</span>}
     
    </div>
  )
}

export default Teacher
