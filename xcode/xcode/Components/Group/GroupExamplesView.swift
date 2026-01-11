
import SwiftUI

struct GroupExamplesView: View {
    var body: some View {
        List {
            Group {
                Text("Item 1 in Group")
                Text("Item 2 in Group")
            }
            .font(.headline)
            
            Group {
                Image(systemName: "star.fill")
                Text("Another Group")
            }
            .foregroundColor(.orange)
        }
        .navigationTitle("Group Examples")
    }
}

struct GroupExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        GroupExamplesView()
    }
}
