StartupEvents.registry('item', event => {

	event.create('aof6_logo').displayName('AOF6')
	event.create('completionist').displayName('Completionist Medal')
	event.create('quester').displayName('All The Quests')
	event.create('croptopia_fertilizer').displayName('Croptopia Fertilizer') //original bag texture from sukuro120 on planetminecraft
	event.create('empty_fertilizer_bag').displayName('Empty Fertilizer Bag') //original bag texture from sukuro120 on planetminecraft
	event.create('glue').displayName('Glue')
	event.create('croptopia_mulch').displayName('Croptopia Mulch') //original bag texture from sukuro120 on planetminecraft
	event.create('invisible_ingot').displayName('Invisible Ingot').rarity('Common')
	event.create('invisible_helmet', 'helmet').displayName('Invisible Helmet').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	event.create('invisible_chestplate', 'chestplate').displayName('Invisible Chestplate').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	event.create('invisible_leggings', 'leggings').displayName('Invisible Leggings').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	event.create('invisible_boots', 'boots').displayName('Invisible Boots').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	event.create('botania_fertilizer').displayName('Botania Fertilizer') //original bag texture from sukuro120 on planetminecraft
});

ItemEvents.armorTierRegistry(event => {
    event.add('invisible', tier => {
        tier.durabilityMultiplier = 5;
        tier.slotProtections = [1, 1, 1, 1];
        tier.enchantmentValue = 5;
        tier.equipSound = 'minecraft:item.armor.equip_iron';
        tier.repairIngredient = 'minecraft:glass';
        tier.toughness = 0.0;
        tier.knockbackResistance = 0.0;
    });
});
