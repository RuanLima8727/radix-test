export const timeRangeFilter = (dataFilter: string): {startDate: Date, now: Date} =>{
    const now = new Date()

    let startDate;

    switch (dataFilter) {
        case 'oneDay':
          startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000); 
          break;
        case 'twoDays':
          startDate = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000); 
          break;
        case 'week':
          startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        case 'month':
          startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          break;
        default:
          throw new Error('Invalid filter value');
      }
      return {
        startDate,
        now
      };
}