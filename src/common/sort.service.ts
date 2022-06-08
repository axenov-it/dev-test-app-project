export type SortTypes = 'asc' | 'desc';

export class SortService {
  sortByFieldName(fields: [], fieldName: string, type: SortTypes = 'asc') {
    return fields.sort((a, b) => {
      if (
        (type === 'asc' && a[fieldName] > b[fieldName]) ||
        (type === 'desc' && a[fieldName] < b[fieldName])
      ) {
        return 1;
      }

      if (
        (type === 'asc' && a[fieldName] < b[fieldName]) ||
        (type === 'desc' && a[fieldName] > b[fieldName])
      ) {
        return -1;
      }

      return 0;
    });
  }

  filterByUnique(fields: [], fieldName: string) {
    return fields.filter(
      (value, index, self) =>
        self.findIndex((v) => v[fieldName] === value[fieldName]) === index,
    );
  }
}
