class Solution
{
public:
    bool containsDuplicate(const vector<int>& nums)
    {
        unordered_set<int> numsHashSet;

        for (const auto& num : nums)
        {
            if(numsHashSet.count(num))
            {
                return true;
            }

            numsHashSet.insert(num);
        }

        return false;
    }
};
