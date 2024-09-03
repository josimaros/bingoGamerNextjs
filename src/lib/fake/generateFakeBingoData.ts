
export const generateFakeBingoData = () => {
    const numRows = 5; // Defina o número de linhas desejado
    const numCols = 5; // Bingo tradicional tem 5 colunas
    const columns: { number: number; markedByComputer: boolean; markedByUser: boolean }[][] = [];
  
    for (let col = 0; col < numCols; col++) {
      const columnData = Array.from({ length: numRows }).map(() => ({
        number: Math.floor(Math.random() * 75) + 1, // Números aleatórios de 1 a 75
        markedByComputer: Math.random() > 0.8, // 20% de chance de ser marcado pelo computador
        markedByUser: false, // Inicialmente não marcado pelo usuário
      }));
      columns.push(columnData);
    }
  
    return columns;
  };