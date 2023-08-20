ServerEvents.recipes(e => {
    e.recipes.create.mechanical_crafting('modern_industrialization:replicator', [
    'UTCBU',
    'TSGSB',
    'CGHGC',
    'BSGST',
    'UBCTU'
  ], 
  {
    U: 'modern_industrialization:uu_matter_bucket',
    T: 'modern_industrialization:quantum_tank',
    C: 'modern_industrialization:quantum_circuit',
    B: 'modern_industrialization:quantum_barrel',
    S: 'modern_industrialization:singularity',
    G: 'modern_industrialization:quantum_upgrade',
    H: 'modern_industrialization:quantum_machine_hull'
  })
})