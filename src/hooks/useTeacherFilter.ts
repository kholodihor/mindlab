import { useMemo } from 'react'
import Fuse from 'fuse.js'
import { Teacher, TeacherFilterCriteria } from '@/types/teacher'

const fuseOptions = {
  keys: ['name_en', 'name_ua', 'speciality'],
  threshold: 0.3,
  ignoreLocation: true,
  shouldSort: true
}

export const useTeacherFilter = (
  teachers: Teacher[] | undefined,
  criteria: TeacherFilterCriteria
) => {
  const fuse = useMemo(() => {
    return teachers ? new Fuse(teachers, fuseOptions) : null
  }, [teachers])

  const filteredTeachers = useMemo(() => {
    if (!teachers) return []
    
    let result = [...teachers]

    // Apply speciality filter
    if (criteria.speciality) {
      result = result.filter(
        teacher => teacher.speciality?.toLowerCase() === criteria.speciality.toLowerCase()
      )
    }

    // Apply search query
    if (criteria.query && fuse) {
      const searchResults = fuse.search(criteria.query)
      result = searchResults.map(({ item }) => item)
    }

    return result
  }, [teachers, criteria.query, criteria.speciality, fuse])

  return filteredTeachers
}
